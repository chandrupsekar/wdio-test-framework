class BlazePage{

    get mainHeader(){
        return $('h2.home_title');
    }
    get parent(){
        return $('ul.list-nav-links');
    }
    get childElements(){
        return this.parent.$$('li');
    }
    get getTextForLi(){
        return this.childElements.filter(element=>{
            console.log(element.getText());
        });
    }

    get useCasesElements(){
        return $$('div#main_b_footer_second_block>ul>li');
    }

    get useCasesElementsText(){
        return this.useCasesElements.filter(element=>{
            console.log(element.getText());
        });
    }

    specificChildElement(index){
        return this.parent.$(`li:nth-child(${index})`)
    }

    getSpecificChildElement(index){
        console.log(this.specificChildElement(index).getText());
    }
}

module.exports = new BlazePage();