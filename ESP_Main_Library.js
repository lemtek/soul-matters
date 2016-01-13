// ******************************************************************************* //
// File:           ESP_Main_Library.js
// Purpose:        This script includes functions for the onLoad, onSave and onChange commands
// Version:        1.0 (Jan 2016)
// Copyright:      (C) 2016 ESP Projects
// History:
// v1.0 - 
// ******************************************************************************* //

// Used to display client alerts on the Quote entity
    function quote_Display_Alerts() {

        var alertArray = null;
        var myAlert = null;

        // Specify the connection URL
        var serverURL = Xrm.Page.context.getClientUrl();
        var queryURL = serverURL + "/XRMServices/2011/OrganizationData.svc/new_alertsSet?$select=new_alertsId,new_Alert,new_Message,new_ClientId,new_Category"

        // Sets the Html request
        var req = new XMLHttpRequest();
        req.open("GET", queryURL, false) // Must specify false here to run synchronously
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.send();

        // Process the results
        var results = JSON.parse(req.responseText).d.results;
        if (results != null && results.length > 0) {
            alertArray = results[0];
            myAlert = alertArray.new_Alert;
        }

       // set the value of the new_clientalerts field
        Xrm.Page.ui.tabs.get("Summary_tab").sections.get("alerts_section").setVisible(true);
        Xrm.Page.getAttribute("new_clientalerts").setValue(myAlert);
        Xrm.Page.getAttribute("new_clientalerts").setSubmitMode("always"); // always put this after setting the value as a field to prevent readonly errors

    }
