var currentPopup = undefined;
var calendarText = "Ouvrir le site web";
var calendarButtonText = "Go";
var currentZone = undefined;

var muralText = "Ouvrir mural ";
var muralTextButton = "Go";

var zoneCalendarList =  [
    {
    zone: "1",
    url: "https://www.janssen.com/france/ "
},
    {
    zone :"2",
    url:"https://norgine.com/about-us/"
    },
    {
        zone:"3",
        url:"https://www.roche.fr/"
    },
    {
        zone: "4",
        url: " https://mangersanssenflammer.fr/ "
    },
    {
        zone: "5",
        url: "https://www.msd-france.com/index.xhtml"
    },
    {
        zone: "6",
        url: ""
    },
    {
        zone: "7",
        url: "https://www.celltrionhealthcare.com/en-us"
    },
    {
        zone: "8",
        url: "https://www.amgen.fr/"
    },
    {
        zone: "9",
        url: "https://www.takeda.com/fr-fr/"
    },
    {
        zone: "10",
        url: "https://www.servier.fr/"
    },
    {
        zone: "11",
        url: "www.infointestinirritable.fr"
    },
    {
        zone: "12",
        url: "https://www.gilead.com/"
    },
    {
        zone: "13",
        url: "https://www.glpg.com/france/"
    },
    {
        zone: "14",
        url: "https://www.glpg.com/france/"
    }


];

var zoneMuralList =  [
    {
        zone: "1",
        url: "https://app.mural.co/t/digilityx3274/m/digilityx3274/1623319418204/c28397017a785dca69545806a9804bb6b133386f?sender=uxmural0404"
    },
    {
        zone :"2",
        url:"https://app.mural.co/t/digilityx3274/m/digilityx3274/1623169417366/a868b76647693cfc17e731cedee0683197bfdb96?sender=uxmural0404"
    },
    {
        zone:"3",
        url:""
    },
    {
        zone: "4",
        url: "https://app.mural.co/t/digilityx3274/m/digilityx3274/1623244420900/05544de650af2cd4a0b3dd6644dd0f9584572ea6?sender=uxmural0404"
    },
    {
        zone: "5",
        url: "https://app.mural.co/t/digilityx3274/m/digilityx3274/1623251352633/28b83eb9a5fab2c7d305b141bedc86d6b665ff18?sender=uxmural0404"
    },
    {
        zone: "6",
        url: "https://app.mural.co/t/digilityx3274/m/digilityx3274/1623424439561/53028fd915c0aa753fb11b474160dbe2cf983532?sender=uxmural0404"
    },
    {
        zone: "7",
        url: "https://app.mural.co/t/digilityx3274/m/digilityx3274/1623394294353/7d5e591f578bd9608cd6ff0a1c3faa53af00c31c?sender=uxmural0404"
    },
    {
        zone: "8",
        url: "https://app.mural.co/t/digilityx3274/m/digilityx3274/1623244399683/2f04f55c3c929de27a6e1501c06ec78d2a5bee49?sender=uxmural0404"
    },
    {
        zone: "9",
        url: "https://app.mural.co/t/digilityx3274/m/digilityx3274/1622798356008/361fde909f0b19c5f9a071f3369890614ab7510d?sender=uxmural0404"
    },
    {
        zone: "10",
        url: "https://app.mural.co/t/digilityx3274/m/digilityx3274/1623329455492/f9bb55ad6dbc091d7385947d0f29ab7918a68564?sender=uxmural0404\n"
    },
    {
        zone: "11",
        url: "https://app.mural.co/t/digilityx3274/m/digilityx3274/1623252081769/7e491980a47c352001ad3ecf83df9eab8caec52e?sender=uxmural0404"
    }

];

function openCalendarPopup(zone){
    currentPopup =  WA.openPopup(zone.zone,calendarText,[
        {
            label: calendarButtonText,
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(zone.url);
                popup.close();
            })
        }]);
}

function openMuralPopup(zone){
    currentPopup =  WA.openPopup(zone.zone,muralText,[
        {
            label: muralTextButton,
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(zone.url);
                popup.close();
            })
        }]);
}

for (const currentZone of zoneCalendarList) {
    let zoneName = currentZone.zone;
    WA.onEnterZone("calendar"+zoneName, () => {
        openCalendarPopup(currentZone);
    });

    WA.onLeaveZone("calendar"+currentZone.zone, () => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });
}

for (const currentZone of zoneMuralList) {
    let zoneName = currentZone.zone;
    WA.onEnterZone("mural"+zoneName, () => {
        openMuralPopup(currentZone);
    });

    WA.onLeaveZone("mural"+currentZone.zone, () => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });
}

// POPUP DOC
const zoneList = {
    popupDoc1: {
        message: 'Consulter les documents', 
        buttons: [
            {
                label: "Ouvrir",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/map/DigHacktion/document/Presentation+AFA+2021.pdf');
                    popupValue.close();
                }
            },
            {
                label: "Fermer",
                className: "popUpElement",
                callback: (popupValue) => {
                    popupValue.close();
                }
            },
        ]
    },
    popupDoc2: {
        message: 'Consulter les documents', 
        buttons: [
            {
                label: "Ouvrir",
                className: "popUpElement",
                callback: (popupValue) => {
                    WA.openCoWebSite('https://backup-workadventure-db-prod.s3.eu-west-1.amazonaws.com/map/DigHacktion/document/PRESENTATION+AFDIAG+DIGHACKTION.pdf');
                    popupValue.close();
                }
            },
            {
                label: "Fermer",
                className: "popUpElement",
                callback: (popupValue) => {
                    popupValue.close();
                }
            },
        ]
    },
};

const zoneListArray = Object.keys(zoneList);
for(let i = 0; i < zoneListArray.length; i++) {
    const index = zoneListArray[i];
    let popup = null;
    WA.onEnterZone(index, () => {
        popup = WA.openPopup(`${index}`, zoneList[index].message, zoneList[index].buttons);
    });
    WA.onLeaveZone(index, () => {
        popup.close();
        WA.closeCoWebSite();
    });
}
