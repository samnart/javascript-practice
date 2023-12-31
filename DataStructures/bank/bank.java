/**
 * bank
 */
class BankAccount {

    private double balance; // account balance

    public BankAccount(double openingBalance) {
        balance = openingBalance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        balance -= amount;
    }

    public void display() {
        System.out.println("Current balance is $" + balance);
    }
    
}

class BankApp {
        public static void main(String[] args) {
            BankAccount ba1 = new BankAccount(100.00);
            
            System.out.print("Before transaction, ");
            ba1.display();

            ba1.deposit(74.35);
            ba1.withdraw(20);

            System.out.print("After transactions, ");
            ba1.display();
        }
    }