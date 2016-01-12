// ******************************************************************************* //
// File:           ESP_Main_Library.js
// Purpose:        This script includes functions for the onLoad, onSave and onChange commands
// Version:        1.0 (Jan 2016)
// Copyright:      (C) 2016 ESP Projects
// History:
// v1.0 - 
// ******************************************************************************* //

function displayClientAlert_onSave() {

    // get the value of the customerid field
    lookupFieldObject = Xrm.Page.data.entity.attributes.get('customerid');
    if (lookupFieldObject.getValue() != null) {
        var entityId = lookupFieldObject.getValue()[0].id;
        var entityName = lookupFieldObject.getValue()[0].entityType;
        var entityLabel = lookupFieldObject.getValue()[0].name;
        var resultXML = getDetails(EntityName, EntityId);
    }

        // set the value of the new_clientalerts field
        Xrm.Page.ui.tabs.get("Summary_tab").sections.get("alerts_section").setVisible(true);
        Xrm.Page.getAttribute("new_clientalerts").setValue(entityLabel);
        Xrm.Page.getAttribute("new_clientalerts").setSubmitMode("always");

}
