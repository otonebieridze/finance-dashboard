export interface Transaction {
  id: number;
  category: string;
  amount: number;
  type: "income" | "expense";
}

export const transactions: Transaction[] = [
  { id: 1, category: "Salary", amount: 3000, type: "income" },
  { id: 2, category: "Food", amount: 400, type: "expense" },
  { id: 3, category: "Rent", amount: 900, type: "expense" },
  { id: 4, category: "Freelance", amount: 800, type: "income" },
];
