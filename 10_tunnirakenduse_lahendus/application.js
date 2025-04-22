let truckList = [];
let tankerList = [];
let warehouseList = [];
let liquidContainerList = [];
let deliveryList = [];

window.onload = function () {
    loadListsFromLocalStorage(); // Load lists from localStorage on page load

    $("#addVehicle").click(createVehicle);
    $("#addStorageFacility").click(createStorageFacility);
    $("#addCargo").click(addCargoToStorageFacility);
    $("#addDelivery").click(createDelivery);
    $("#deliveryType").change(renderDeliveryOptions);
    $("#cargoType").change(renderFacilityOptions);
    renderDeliveryOptions();
    renderFacilityOptions();
    renderDeliveries();
    renderOverview();
};

function saveListsToLocalStorage() {
    warehouseList.forEach((warehouse) => {
        const matchingFacility = warehouseList.find((w) => w.name === warehouse.name);
        if (matchingFacility) {
            matchingFacility.currentCapacity = warehouse.currentCapacity;
        }
    });
    liquidContainerList.forEach((container) => {
        const matchingFacility = liquidContainerList.find((c) => c.name === container.name);
        if (matchingFacility) {
            matchingFacility.currentCapacity = container.currentCapacity;
        }
    });

    localStorage.setItem("truckList", JSON.stringify(truckList));
    localStorage.setItem("tankerList", JSON.stringify(tankerList));
    localStorage.setItem("warehouseList", JSON.stringify(warehouseList));
    localStorage.setItem("liquidContainerList", JSON.stringify(liquidContainerList));
    localStorage.setItem("deliveryList", JSON.stringify(deliveryList));
    renderDeliveries();
    renderOverview();
}

function loadListsFromLocalStorage() {
    if (localStorage.getItem("truckList")) {
        truckList = JSON.parse(localStorage.getItem("truckList")).map(
            (item) => new Vehicle(item.regNumber, item.maxCapacity, item.unit)
        );
    }
    if (localStorage.getItem("tankerList")) {
        tankerList = JSON.parse(localStorage.getItem("tankerList")).map(
            (item) => new Vehicle(item.regNumber, item.maxCapacity, item.unit)
        );
    }
    if (localStorage.getItem("warehouseList")) {
        warehouseList = JSON.parse(localStorage.getItem("warehouseList")).map(
            (item) => {
                const warehouse = new Warehouse(item.name, item.maxCapacity);
                warehouse.currentCapacity = item.currentCapacity; // Restore current capacity
                return warehouse;
            }
        );
    }
    if (localStorage.getItem("liquidContainerList")) {
        liquidContainerList = JSON.parse(localStorage.getItem("liquidContainerList")).map(
            (item) => {
                const container = new LiquidContainer(item.name, item.maxCapacity);
                container.currentCapacity = item.currentCapacity; // Restore current capacity
                return container;
            }
        );
    }
    if (localStorage.getItem("deliveryList")) {
        deliveryList = JSON.parse(localStorage.getItem("deliveryList")).map(
            (item) => {
                // Reconstruct cargo
                const cargo = item.cargo.unit === "kg"
                    ? new Solid(item.cargo.amount)
                    : new Liquid(item.cargo.amount);

                // Find the source and destination storage facilities
                const source = item.cargo.unit === "kg"
                    ? warehouseList.find((w) => w.name === item.source.name)
                    : liquidContainerList.find((c) => c.name === item.source.name);

                const destination = item.cargo.unit === "kg"
                    ? warehouseList.find((w) => w.name === item.destination.name)
                    : liquidContainerList.find((c) => c.name === item.destination.name);

                // Find the assigned vehicle
                const vehicle = item.cargo.unit === "kg"
                    ? truckList.find((v) => v.regNumber === item.assignedVehicle.regNumber)
                    : tankerList.find((v) => v.regNumber === item.assignedVehicle.regNumber);

                // Reconstruct the Delivery object
                const delivery = new Delivery(cargo, source, destination, vehicle);
                delivery.status = item.status; // Restore the status
                return delivery;
            }
        );
    }
}

function createVehicle() {
    if ($("#unit").val() == "kg") {
        truckList.push(new Vehicle($("#regNumber").val(), parseInt($("#maxCapacity").val()), "kg"));
    } else if ($("#unit").val() == "l") {
        tankerList.push(new Vehicle($("#regNumber").val(), parseInt($("#maxCapacity").val()), "l"));
    }
    saveListsToLocalStorage();
    $("#regNumber").val("");
    $("#maxCapacity").val("");
    renderDeliveryOptions();
}

function createStorageFacility() {
    if ($("#facilityType").val() == "kg") {
        warehouseList.push(new Warehouse($("#facilityName").val(), parseInt($("#facilityCapacity").val())));
    } else if ($("#facilityType").val() == "l") {
        liquidContainerList.push(new LiquidContainer($("#facilityName").val(), parseInt($("#facilityCapacity").val())));
    }
    saveListsToLocalStorage();
    $("#facilityName").val("");
    $("#facilityCapacity").val("");
    renderFacilityOptions();
}

function addCargoToStorageFacility() {
    const selectedIndex = parseInt($("#facilitySelect").val());
    const selectedFacility = $("#cargoType").val() === "kg"
        ? warehouseList[selectedIndex]
        : liquidContainerList[selectedIndex];
    if (selectedFacility.unit === "kg") {
        try{
            selectedFacility.addCargo(new Solid(parseInt($("#cargoAmount").val())));
        } catch(error){
            alert(error.message);
        }
        
    } else if (selectedFacility.unit === "l") {
        try{
            selectedFacility.addCargo(new Liquid(parseInt($("#cargoAmount").val())));
        } catch(error){
            alert(error.message);
        }
    }
    saveListsToLocalStorage();
    $("#cargoAmount").val("");
    renderFacilityOptions();
}

function createDelivery() {
    const cargo = $("#deliveryType").val() === "Solid"
        ? new Solid(parseInt($("#deliveryCargo").val()))
        : new Liquid(parseInt($("#deliveryCargo").val()));
    const source = $("#deliveryType").val() === "Solid"
        ? warehouseList[parseInt($("#deliverySource").val())]
        : liquidContainerList[parseInt($("#deliverySource").val())];
    const destination = $("#deliveryType").val() === "Solid"
        ? warehouseList[parseInt($("#deliveryDestination").val())]
        : liquidContainerList[parseInt($("#deliveryDestination").val())];
    const vehicle = $("#deliveryType").val() === "Solid"
        ? truckList[parseInt($("#deliveryVehicle").val())]
        : tankerList[parseInt($("#deliveryVehicle").val())];

    deliveryList.push(new Delivery(cargo, source, destination, vehicle));
    saveListsToLocalStorage();
}

function renderDeliveryOptions() {
    $("#deliveryCargo").empty();
    $("#deliverySource").empty();
    $("#deliveryDestination").empty();
    $("#deliveryVehicle").empty();

    if ($("#deliveryType").val() === "Solid") {
        warehouseList.forEach((warehouse, index) => {
            $("#deliverySource").append(`<option value="${index}">${warehouse.name}</option>`);
            $("#deliveryDestination").append(`<option value="${index}">${warehouse.name}</option>`);
        });
        truckList.forEach((truck, index) => {
            $("#deliveryVehicle").append(`<option value="${index}">${truck.regNumber}</option>`);
        });
    } else if ($("#deliveryType").val() === "Liquid") {
        liquidContainerList.forEach((container, index) => {
            $("#deliverySource").append(`<option value="${index}">${container.name}</option>`);
            $("#deliveryDestination").append(`<option value="${index}">${container.name}</option>`);
        });
        tankerList.forEach((tanker, index) => {
            $("#deliveryVehicle").append(`<option value="${index}">${tanker.regNumber}</option>`);
        });
    }
}

function renderFacilityOptions() {
    $("#facilitySelect").empty();
    if ($("#cargoType").val() === "kg") {
        warehouseList.forEach((warehouse, index) => {
            $("#facilitySelect").append(`<option value="${index}">${warehouse.name}</option>`);
        });
    } else if ($("#cargoType").val() === "l") {
        liquidContainerList.forEach((container, index) => {
            $("#facilitySelect").append(`<option value="${index}">${container.name}</option>`);
        });
    }
}

function renderDeliveries() {
    $("#deliveryList").empty();
    deliveryList.forEach((delivery, index) => {
        const deliveryDiv = $("<div>").addClass("delivery-item");
        deliveryDiv.append(`<p>${delivery.getInfo()}</p>`);

        let button;
        if (delivery.status === "Pending") {
            button = $("<button>")
                .text("Start Delivery")
                .click(() => {
                    try {
                        delivery.startDelivery();
                        saveListsToLocalStorage();
                        renderOverview(); 
                        renderDeliveries();
                    } catch (error) {
                        alert(error.message);
                    }
                });
        } else if (delivery.status === "In Transit") {
            button = $("<button>")
                .text("Complete Delivery")
                .click(() => {
                    try {
                        delivery.completeDelivery();
                        saveListsToLocalStorage();
                        renderOverview(); 
                        renderDeliveries();
                    } catch (error) {
                        alert(error.message);
                    }
                });
        } else if (delivery.status === "Completed") {
            button = $("<button>")
                .text("Delete Delivery")
                .click(() => {
                    deliveryList.splice(index, 1);
                    saveListsToLocalStorage();
                    renderOverview(); 
                    renderDeliveries();
                });
        }

        deliveryDiv.append(button);
        $("#deliveryList").append(deliveryDiv);
    });
}

function renderOverview() {
    const overviewDiv = $("#overview");
    overviewDiv.empty(); // Clear the existing content

    // Combine all storage facilities into one array
    const allStorageFacilities = [...warehouseList, ...liquidContainerList];

    if (allStorageFacilities.length === 0) {
        // Display a message if no storage facilities are present
        overviewDiv.append("<p>There are currently no storage facilities</p>");
        return;
    }

    // Create a table for the overview
    const table = $("<table>").addClass("overview-table");
    const headerRow = `
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Current Capacity</th>
            <th>Max Capacity</th>
        </tr>
    `;
    table.append(headerRow);

    // Add rows for each storage facility
    allStorageFacilities.forEach((facility) => {
        const row = `
            <tr>
                <td>${facility.name}</td>
                <td>${facility.type}</td>
                <td>${facility.currentCapacity}${facility.unit}</td>
                <td>${facility.maxCapacity}${facility.unit}</td>
            </tr>
        `;
        table.append(row);
    });

    // Append the table to the overview div
    overviewDiv.append(table);
}

