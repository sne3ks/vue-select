module.exports = {
	props: {

        texts : {
            type: Object, 
            default : () => ({})
        },
        
    },

    data() {
        return {
            defaultTexts : {
                noResults : "Sorry, no matching options.", 
                loading : "Loading...",
                searchOption : "Search for options",
                clearSelection : "Clear selection"
            }
        }
    },

    computed: {
        textValues(){
            return {
                ...this.defaultTexts,
                ...this.texts
            }
        }
    },

}
