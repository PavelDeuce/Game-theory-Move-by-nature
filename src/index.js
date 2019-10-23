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
  const C = question('Enter your expenses >: ');

  const result = (minimalAverageRisk > C) ? 'Let\'s do the experiment!' : 'The experiment is useless!';
  console.log(result);

  imperfectExperiment();
};
