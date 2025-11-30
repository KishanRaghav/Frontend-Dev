// Q8 Banking App
class BankAccount{
    #balance=0;
    deposit(amount){ this.#balance+=amount; }
    withdraw(amount){
        if(amount>this.#balance) throw new Error("Insufficient balance");
        this.#balance-=amount;
    }
    getBalance(){ return this.#balance; }
}

let acc=new BankAccount();
acc.deposit(500);
console.log("Balance:",acc.getBalance());

try{ acc.withdraw(1000); }
catch(e){ console.log("Error:",e.message); }
