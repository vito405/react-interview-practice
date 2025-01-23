

const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: false,
    showTreeView: true,
    showTabs: true,
}


function featureFlagsDataServiceCall() {


    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500)
        else reject('Some Error Occured ! Please try again')
    })
}

export default featureFlagsDataServiceCall;