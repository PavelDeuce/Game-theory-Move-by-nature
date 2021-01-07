import { question } from 'readline-sync';

import getValdeCriterion from './criterions/valde';
import getSavageCriterion from './criterions/savage';
import getGurvicCriterion from './criterions/gurvic';
import getLaplassCriterion from './criterions/laplass';
import getMaxWinCriterion from './criterions/maximumAverageWin';
import getMinRiskCriterion from './criterions/minimumAverageRisk';
import getHodgeLemanCriterion from './criterions/hodgeLeman';
import getGermeyerCriterion from './criterions/germeyer';

import imperfectExperiment from './imperfectExperiment';

export default () => {
  getValdeCriterion();
  getSavageCriterion();
  getGurvicCriterion();
  getLaplassCriterion();
  getMaxWinCriterion();
  getHodgeLemanCriterion();
  getGermeyerCriterion();
  const minimalAverageRisk = getMinRiskCriterion();

  console.log(`Expenses are to be less than ${minimalAverageRisk}`);
  const expenses = question('Enter your expenses >: ');

  const caseOfPerfectExperiment = (minimalAverageRisk > expenses) ? 'Let\'s do perfect experiment!' : 'Perfect experiment is useless!';
  console.log(caseOfPerfectExperiment);

  const resultOfImperfect = imperfectExperiment();
  const caseOfImperfectExperiment = (resultOfImperfect > expenses) ? 'Let\'s do imperfect experiment!' : 'Imperfect experiment is useless!';
  console.log(caseOfImperfectExperiment);
};
