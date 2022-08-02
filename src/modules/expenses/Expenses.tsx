import { ExpensesChart } from './expensesChart/ExpensesChart';
import ExpensesForm from './expensesForm/ExpensesForm';
import { CustomDiv, CustomDivWrapper } from './ExpensesStyles';
import ExpensesTable from './expensesTable/ExpensesTable';

export const Expenses = () => {
  return (
    <CustomDivWrapper>
      <CustomDiv>
        <ExpensesForm />
        <ExpensesTable />
      </CustomDiv>
      <div>
        <ExpensesChart />
      </div>
    </CustomDivWrapper>
  );
};
