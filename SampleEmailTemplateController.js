({
    //handleClick would handle passing the value of current record Id to the apex method and once clicked page should automatically navigate to the current Sample record page.
	handleClick : function(component, event, helper) {
		var action = component.get("c.sendRequest");
        action.setParams({
            "SamplerecordID" : component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
                alert('Email has been sent ' + response.getReturnValue());
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": component.get("v.recordId"),
                    "slideDevName": "detail"
                });
                navEvt.fire();
            }
        });
        $A.enqueueAction(action);
	}
})
