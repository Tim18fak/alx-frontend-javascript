import Currency from './3-currency'

class Pricing{
	constructor(amount, currency){
		this._amount = amount;
		this._currency = currency;
	}
	set currency(currency){
		this._currency = currency;
	}
	set amount(amount){
		this._amount = amount;
	}
	get currency(){
		return this._currency;
	}
	get amount(){
		return this._amount;
	}
	displayFullPrice(){
		/*return `${this._amount} ${ new Currency${this._currency.name} (${this._currency.name})`*/
		return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;

	}
	static convertPrice(amount,conversionRate){
		/*try{
			if(typeof amount !== 'number' && typeof conversionRate !== 'number'){
				throw new Error()
			}
			let newAmount;
			newAmount = amount * conversionRate;
			return newAmount;
		}
		catch(error){
			console.log(error)
		}*/
		return amount * conversionRate;
}
}

export default Pricing;
