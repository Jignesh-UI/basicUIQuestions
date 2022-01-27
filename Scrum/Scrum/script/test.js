var gradFlag=false;
$(".courseGradeRow .value").each(function(item){
    var obj = $(this);
    if($(obj).html().trim().length>0){
        console.log("valid")
    }else{
        console.log("invalid")
        gradFlag=false;
        return false;
    }
});


$("#programTerm .dropdown-main ul li").each(function(item){
    var obj = $(this);
    $(obj).removeClass("dropdown-chose")
    if(obj.html().trim().toLowerCase() == $("input[id$='inNetworkTermName']").val().trim().toLowerCase()){
        $(obj).addClass("dropdown-chose");
    }
})



$("#programTerm .dropdown-main ul li").each(function(item){
    var obj = $(this);
    if(obj.attr("data-value") == "a1G0e00000KYnuaEAD"){
        obj.click();
        obj.addClass("dropdown-chose");
    }
});


$("#schoolInput select option").each(function(item){
    var obj = $(this);
    console.log(obj.value)
    if(obj.val() == "0010e00001NfEfHAAV"){
        obj.selected = true;
    }
})


var schoolSFId = "0012200000KaOlLAAV";
    var urlParams = {};
    document.addEventListener("DOMContentLoaded", function (event) {
        getUrlParams();
        if (urlParams.chat != undefined && urlParams.chat === "open") {
            embedded_svc.onHelpButtonClick();
        }
    });

    function getUrlParams() {
        var parts = decodeURIComponent(window.location.href).replace(
            /[?&]+([^=&]+)=([^&]*)/gi,
            function (m, key, value) {
                urlParams[key] = value;
            }
        );
        return urlParams;
    }

    var initESW = function (gslbBaseURL) {
        //Embedded Service Event Tracking
        embedded_svc.addEventHandler("onHelpButtonClick", function (data) {
            console.log("onHelpButtonClick event was fired.");
        });

        embedded_svc.addEventHandler("onChatRequestSuccess", function (data) {
            console.log("onChatRequestSuccess event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onChatEstablished", function (data) {
            console.log("onChatEstablished event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onChasitorMessage", function (data) {
            console.log("onChasitorMessage event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onAgentMessage", function (data) {
            console.log("onAgentMessage event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onChatConferenceInitiated", function (data) {
            console.log("onChatConferenceInitiated event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onAgentJoinedConference", function (data) {
            console.log("onAgentJoinedConference event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onAgentLeftConference", function (data) {
            console.log("onAgentLeftConference event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onChatConferenceEnded", function (data) {
            console.log("onChatConferenceEnded event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onChatTransferSuccessful", function (data) {
            console.log("onChatTransferSuccessful event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onChatEndedByChasitor", function (data) {
            console.log("onChatEndedByChasitor event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onChatEndedByAgent", function (data) {
            console.log("onChatEndedByAgent event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onQueueUpdate", function (data) {
            console.log("onQueueUpdate event was fired. liveAgentSessionKey was " + data.liveAgentSessionKey + "and queuePosition was " + data.queuePosition);
        });

        embedded_svc.addEventHandler("onIdleTimeoutOccurred", function (data) {
            console.log("onIdleTimeoutOccurred event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onConnectionError", function (data) {
            console.log("onConnectionError event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });

        embedded_svc.addEventHandler("onClickSubmitButton", function (data) {
            console.log("onClickSubmitButton event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        embedded_svc.addEventHandler("onInviteAccepted", function (data) {
            console.log("onInviteAccepted event was fired.");
        });

        embedded_svc.addEventHandler("onInviteRejected", function (data) {
            console.log("onInviteRejected event was fired.");
        });

        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = "en-US"; //For example, enter 'en' or 'en-US'

        embedded_svc.settings.widgetWidth = "340px";
        embedded_svc.settings.widgetHeight = "480px";

        embedded_svc.settings.defaultMinimizedText = "Chat Now"; //(Defaults to Chat with an Expert)
        embedded_svc.settings.disabledMinimizedText = "Chat - Offline"; //(Defaults to Agent Offline)

        embedded_svc.settings.loadingText = "Loading..."; //(Defaults to Loading)

        //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)
        // Settings for Chat
        //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
        // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
        // Returns a valid button ID.
        //};
        //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId

        //Sets the auto-population of pre-chat form fields
        embedded_svc.settings.prepopulatedPrechatFields = {
            FirstName: getUrlParams().fname,
            LastName: getUrlParams().lname,
            Email: getUrlParams().email
        };

        embedded_svc.settings.offlineSupportMinimizedText = "Ask a Question"; //(Defaults to Contact Us)

        embedded_svc.settings.extraPrechatFormDetails = [{
                label: "Account Id",
                value: schoolSFId,
                displayToAgent: true,
                transcriptFields: ["AccountId"]
            },
            {
                label: "First Name",
                value: getFN(),
                displayToAgent: true,
                transcriptFields: ["First_Name__c"]
            },
            {
                label: "Last Name",
                value: getLN(),
                displayToAgent: true,
                transcriptFields: ["Last_Name__c"]
            },
            {
                label: "Email",
                value: getEmail(),
                displayToAgent: true,
                transcriptFields: ["Email__c"]
            },
            {
                label: "URLParams",
                value: Object.keys(getUrlParams()).length > 0 ?
                    JSON.stringify(getUrlParams()) : null,
                displayToAgent: true,
                transcriptFields: ["URL_Parameters_JSON__c"]
            },
            {
                label: "URL",
                value: decodeURIComponent(window.location.href),
                displayToAgent: true,
                transcriptFields: ["ReferrerUri"]
            },
            {
                label: "ContId",
                value: getContactId(),
                displayToAgent: true,
                transcriptFields: ["ContactId"]
            }
        ];

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';

		embedded_svc.init(
			'https://wes-srp--EBPTest.my.salesforce.com',
			'https://ebptest-learn-today.cs27.force.com/liveagent',
			gslbBaseURL,
			'00D22000000D66S',
			'MAM',
			{
				baseLiveAgentContentURL: 'https://c.la1-c1cs-ph2.salesforceliveagent.com/content',
				deploymentId: '57222000000CaVd',
				buttonId: '57322000000CabR',
				baseLiveAgentURL: 'https://d.la1-c1cs-ph2.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I22000000CakiEAC_16f47bc1b77',
				isOfflineSupportEnabled: false
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://wes-srp--EBPTest.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
    }

    


    
    currentType.closest(".dropdown-menu").closest(".dropdownButtonBox").children(".dropdownButton").html(currentType.html() + '<span class="dropdownButtonArrowDown"></span>');
    $(currentType).addClass("added");


    function hidePicklistItems(){
        $(".dropdown-menu").removeClass("show");
    }

    $(".dropdownButton").html(ttt + '<span class="dropdownButtonArrowDown"></span>')

    addSelectedDepartmentOnLoad()


    updateProgramName(); updateTermSelected();





    function validateDocumentSection(currentSection,event){
        debugger;
           var attachFile = $("input[id$='grdF']").val();
           var attachEmpFile = $("input[id$='billF']").val();
           var attachFERFAFile = $("input[id$='ferFF']").val();
       
         var fileHasError = false;
         if(attachFile !=null || attachFile !='' || attachEmpFile !=null || attachEmpFile !='' ||  attachFERFAFile !=null || attachFERFAFile !=''){
            var errDivSize= document.getElementById('errorDivSize');
            var errDivType= document.getElementById('errorDivType');
            var errPage= document.getElementById('errPage');
           
            var goodSize = true;
            var fileSizeFromLabel = '{!$Label.SAPTuitionMgmtFileSizeLabel}';
            $('input[type=file]').each(function(){
                if(typeof this.files[0] !== 'undefined'){
                if(this.id.includes('grdF')){
                            $("label[id$='gradEL']").html('');
                        }else if(this.id.includes('billF')){
                            $("label[id$='billEL']").html('');
                        }else if(this.id.includes('ferFF')){
                            $("label[id$='ferFEL']").html('');
                        }
                    var file = this.files[0], size = typeof ActiveXObject !== 'undefined' ? getIEFileSize(file) : file.fileSize || file.size;
                    goodSize = fileSizeFromLabel > size;
                    if(!goodSize){
                        errDivSize.className = "messageText";
                        errDivSize.style.display="block";
                        fileHasError = true;
                        errorDivType.style.display="none";
                        errPage.style.display="none";
                        // alert(this.files[0].name +' is too large - please choose a file that is 35Kb or less');
                    } else {
                        if (fileSizeFromLabel < size){
                            goodSize=confirm('The file size is ' + size +' bytes - this may take some time. Are you sure you wish to continue');
                        }
                    }
                   }else{
                        if(this.files[0]){
                            if(this.id.includes('grdF')){
                                var filenametemp = '{!$Label.SAPEligibilityReqAttachment}';
                                $("label[id$='gradEL']").html('Please Upload '+filenametemp+' document');
                                fileHasError = true;
                            }else if(this.id.includes('billF')){
                                var filenametemp = '{!$Label.SAPEliReqDocEmpProof}';
                                $("label[id$='billEL']").html('Please Upload '+filenametemp+' document');
                                fileHasError = true;
                            }else if(this.id.includes('ferFF')){
                                var filenametemp = '{!$Label.SAPEliReqDocEmpProof}';
                                $("label[id$='ferFEL']").html('Please Upload '+filenametemp+' document');
                                fileHasError = true;
                            }
                        }
                  }
            });
        }
