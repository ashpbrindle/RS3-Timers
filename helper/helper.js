
export const findIcon = (item) => {
    switch(item.img) {
        case "img_acorn": return require("../assets/img_acorn_tree.png");
        case "img_willow": return require("../assets/img_willow_tree.png");
        case "img_maple": return require("../assets/img_maple_tree.png");
        case "img_yew": return require("../assets/img_yew_tree.png");
        case "img_magic": return require("../assets/img_magic_tree.png");

        case "img_apple": return require("../assets/img_apple_tree.png");
        case "img_banana": return require("../assets/img_banana_tree.png");
        case "img_orange": return require("../assets/img_orange_tree.png");
        case "img_curry": return require("../assets/img_curry_tree.png");
        case "img_pineapple": return require("../assets/img_pineapple_tree.png");
        case "img_papaya": return require("../assets/img_papaya_tree.png");
        case "img_palm": return require("../assets/img_palm_tree.png");
        case "img_ciku": return require("../assets/img_ciku_tree.png");
        case "img_guarana": return require("../assets/img_guarana_tree.png");
        case "img_carambola": return require("../assets/img_carambola_tree.png");
        
        case "img_calquat": return require("../assets/img_calquat_tree.png");
        case "img_crystal": return require("../assets/img_crystal_tree.png");
        case "img_money": return require("../assets/img_money_tree.png");
        case "img_elder": return require("../assets/img_elder_tree.png");

        case "img_potato": return require("../assets/img_potato.png")
        case "img_onion": return require("../assets/img_onion.png")
        case "img_cabbage": return require("../assets/img_cabbage.png")
        case "img_tomato": return require("../assets/img_tomato.png")
        case "img_sweetcorn": return require("../assets/img_sweetcorn.png")
        case "img_strawberry": return require("../assets/img_strawberry.png")
        case "img_watermelon": return require("../assets/img_watermelon.png")
        case "img_snapegrass": return require("../assets/img_snapegrass.png")
        case "img_sunchoke": return require("../assets/img_sunchoke.png")
        case "img_fly_trap": return require("../assets/img_fly_trap.png")

        case "img_herb": return require("../assets/img_herb.png")
        case "img_gout_tuber": return require("../assets/img_gout_tuber.png")
        case "img_fellstalk": return require("../assets/img_fellstalk.png")
        case "img_wergali": return require("../assets/img_wergali.png")

        case "img_marigold": return require("../assets/img_marigold.png")
        case "img_rosemary": return require("../assets/img_rosemary.png")
        case "img_nasturtium": return require("../assets/img_nasturtium.png")
        case "img_woad": return require("../assets/img_woad.png")
        case "img_limpwurt": return require("../assets/img_limpwurt.png")
        case "img_white_lily": return require("../assets/img_white_lily.png")
        case "img_butterfly": return require("../assets/img_butterfly.png")

        case "img_barley": return require("../assets/img_barley.png")
        case "img_hammerstone": return require("../assets/img_hammerstone.png")
        case "img_asgarnian": return require("../assets/img_asgarnian.png")
        case "img_jute": return require("../assets/img_jute.png")
        case "img_yanillian": return require("../assets/img_yanillian.png")
        case "img_krandorian": return require("../assets/img_krandorian.png")
        case "img_wildblood": return require("../assets/img_wildblood.png")
        case "img_reed": return require("../assets/img_reed.png");
        case "img_grapevine": return require("../assets/img_grapevine.png");

        case "img_redberry": return require("../assets/img_redberry.png")
        case "img_cadavaberry": return require("../assets/img_cadavaberry.png")
        case "img_dwellberry": return require("../assets/img_dwellberry.png")
        case "img_jangerberry": return require("../assets/img_jangerberry.png")
        case "img_whiteberry": return require("../assets/img_whiteberry.png")
        case "img_poison_ivy": return require("../assets/img_poison_ivy.png")
        case "img_barberry": return require("../assets/img_barberry.png")
        case "img_avocado": return require("../assets/img_avocado.png")
        case "img_mango": return require("../assets/img_mango.png")
        case "img_lychee": return require("../assets/img_lychee.png")

        case "img_cactus": return require("../assets/img_cactus.png")
        case "img_prickly_pear": return require("../assets/img_prickly_pear.png")
        case "img_potato_cactus": return require("../assets/img_potato_cactus.png")
        case "img_dragonfruit": return require("../assets/img_dragonfruit.png")
        case "img_golden_dragonfruit": return require("../assets/img_golden_dragonfruit.png")

        default: break
    }
}

export const getDoubleNumber = (number) => {
    var return_value = ""
    number < 10 ? return_value = "0" + number : return_value = number
    return return_value
}

export const getTripleNumber = (number) => {
    var return_value = ""
    if (number < 10) {
        return_value = "00" + number
        return return_value
    }
    else if (number >= 10 && number < 100) {
        return_value = "0" + number
        return return_value
    }
    else {
        return number
    }
}