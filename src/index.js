import { question } from 'readline-sync';
import getValdeCriterion from './criterions/valde';
import getSavageCriterion from './criterions/savage';
import getGurvicCriterion from './criterions/gurvic';
import getLaplassCriterion from './criterions/laplass';
import getMaxWinCriterion from './criterions/maximumAverageWin';
import getMinRiskCriterion from './criterions/minimumAverageRisk';
import imperfectExperiment from './imperfectExperiment';

export default () => {
  getValdeCriterion();
  getSavageCriterion();
  getGurvicCriterion();
  getLaplassCriterion();
  getMaxWinCriterion();
  const minimalAverageRisk = getMinRiskCriterion();

  console.log(`Expenses are to be less than ${minimalAverageRisk}`);
  const expenses = question('Enter your expenses >: ');

  const caseOfPerfectExperiment = (minimalAverageRisk > expenses) ? 'Let\'s do the experiment!' : 'The experiment is useless!';
  console.log(caseOfPerfectExperiment);

  const result = imperfectExperiment();
  const caseOfImperfectExperiment = (result > expenses) ? 'Let\'s do the experiment!' : 'The experiment is useless!';
  console.log(caseOfImperfectExperiment);
};
