import ExpensesForm from './expensesForm/ExpensesForm';
import { CustomDivWrapper } from './ExpensesStyles';
import ExpensesTable from './expensesTable/ExpensesTable';

export const Expenses = () => {
  return (
    <CustomDivWrapper>
      <ExpensesForm />
      <ExpensesTable />
    </CustomDivWrapper>
  );
};
