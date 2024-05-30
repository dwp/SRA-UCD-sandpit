//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post("/mvp/account/relationship-changes/have-you-moved-in-with-a-partner", (req, res) => {
    if (req.body.movedInWithPartner === "yes") {
        res.redirect("/mvp/account/relationship-changes/partner-details")
    } else {
        res.redirect("/mvp/account/relationship-changes/does-anyone-live-in-the-property")
    }
})

router.post("/mvp/account/relationship-changes/partner-details", (req, res) => {
    res.redirect("/mvp/account/relationship-changes/does-anyone-live-in-the-property")
})


router.post("/mvp/account/relationship-changes/does-anyone-live-in-the-property", (req, res) => {
    if (req.body.anyLiveInTheProperty === "yes") {
        res.redirect("/mvp/account/relationship-changes/people-who-live-at-your-addres")
    } else {
        res.redirect("/mvp/account/relationship-changes/check-your-answers")
    }
})


router.post("/mvp/account/relationship-changes/check-your-answers", (_req, res) => {
    res.redirect("/mvp/account/to-do")
})