import { faker } from '@faker-js/faker';
/* import { sample } from 'lodash'; */

// ----------------------------------------------------------------------
const users = [{
  id: faker.datatype.uuid(),
  name:'put',
  company:'EUR/USD',
  role:'1.0818',
  isVerified:'0.0005',
  status:'05-16-2023',
},{
  id: faker.datatype.uuid(),
  name:'call',
  company:'EUR/USD',
  role:'1.0818',
  isVerified:'0.0153',
  status:'05-16-2023',
},{
  id: faker.datatype.uuid(),
  name:'put',
  company:'EUR/USD',
  role:'1.0769',
  isVerified:'0.0007',
  status:'05-23-2023',
},{
  id: faker.datatype.uuid(),
  name:'call',
  company:'EUR/USD',
  role:'1.0769',
  isVerified:'0.02073',
  status:'05-23-2023',
},{
  id: faker.datatype.uuid(),
  name:'put',
  company:'EUR/USD',
  role:'1.0679',
  isVerified:'0.0011',
  status:'06-08-2023',
},{
  id: faker.datatype.uuid(),
  name:'call',
  company:'EUR/USD',
  role:'1.0679',
  isVerified:'0.03099',
  status:'06-08-2023',
},{
  id: faker.datatype.uuid(),
  name:'put',
  company:'EUR/USD',
  role:'1.0551',
  isVerified:'0.00168',
  status:'07-07-2023',
},{
  id: faker.datatype.uuid(),
  name:'call',
  company:'EUR/USD',
  role:'1.0551',
  isVerified:'0.04598',
  status:'07-07-2023',
},{
  id: faker.datatype.uuid(),
  name:'put',
  company:'EUR/USD',
  role:'1.0447',
  isVerified:'0.00218',
  status:'09-08-2023',
},{
  id: faker.datatype.uuid(),
  name:'call',
  company:'EUR/USD',
  role:'1.0447',
  isVerified:'0.05838',
  status:'09-08-2023',
},{
  id: faker.datatype.uuid(),
  name:'put',
  company:'EUR/USD',
  role:'1.0232',
  isVerified:'0.00328',
  status:'11-09-2023',
},{
  id: faker.datatype.uuid(),
  name:'put',
  company:'EUR/USD',
  role:'1.0672',
  isVerified:'0.00953',
  status:'11-09-2023',
}]
/* const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: sample(['put','call']),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));
 */
export default users;
