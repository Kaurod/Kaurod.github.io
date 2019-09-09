var itemList = [];
itemList[10] = 80;
itemList[11] = 120;
itemList[12] = 290;
itemList[20] = 50;
itemList[21] = 100;
itemList[22] = 250;
itemList[30] = 65;
itemList[31] = 40;
itemList[32] = 80;
itemList[40] = 40;
itemList[41] = 55;

function getProccesorInfo(element) 
{
    var selected = element[element.selectedIndex];
    return {
        text: selected.text,
        price: itemList[selected.value]
    };
}

function getDriveInfo(element) 
{
    return {
        checked: element.checked,
        price: itemList[element.value]
    };
}

function getCaseInfo(element) 
{
    var selected = element[element.selectedIndex];
    return {
        text: selected.text,
        checked: element.checked,
        price: itemList[element.value]
    };
}

function updateClick() 
{
    var totalAmount = 0;
    var orderDetails = "";
    var box = document.form;
    
    var selectedProcessor = getProccesorInfo(box.costProcessor);
    totalAmount = selectedProcessor.price;
    orderDetails = "Processor : " + selectedProcessor.text;
    orderDetails = orderDetails + " $" + selectedProcessor.price + "\n";
    
    var selectedSsd = getProccesorInfo(box.costSsd);
    totalAmount = totalAmount + selectedSsd.price;
    orderDetails = orderDetails + "SSD : " + selectedSsd.text;
    orderDetails = orderDetails + " $" + selectedSsd.price + "\n";

    var selectedCase = getCaseInfo(box.costCase);
    totalAmount = totalAmount + selectedCase.price;
    orderDetails = orderDetails + "Case : " + selectedCase.text;
    orderDetails = orderDetails + " $" + selectedCase.price + "\n";

    
    var dvdInfo = getDriveInfo(box.checkBoxDVD);
    
    if (dvdInfo.checked) 
    {
        totalAmount = totalAmount + dvdInfo.price;
        orderDetails = orderDetails + "DVD-ROM : $" + dvdInfo.price + "\n";
    }
    
    var bluRayInfo = getDriveInfo(box.checkBoxBluRay);
    if (bluRayInfo.checked) 
    {
        totalAmount = totalAmount + bluRayInfo.price;
        orderDetails = orderDetails + "Blu-ray : $" + bluRayInfo.price + "\n";
    }

    orderDetails = orderDetails + "\n\nTotal cost of the Order is " + "$" + totalAmount;
    box.txtOrder.value = orderDetails;
 }

document.getElementById("Update")
.addEventListener("click", updateClick);