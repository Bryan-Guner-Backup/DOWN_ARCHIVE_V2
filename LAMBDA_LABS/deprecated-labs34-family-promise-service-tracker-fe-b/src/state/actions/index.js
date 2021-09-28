// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file

export { getUserAction, updateUserAction } from './userActions';

export {
  getAllServicesAction,
  getServiceByIdAction,
  addServiceAction,
  editServiceAction,
  deleteServiceAction,
} from './serviceActions';

export {
  getAllServiceTypesAction,
  getServiceTypeByIdAction,
  addServiceTypeAction,
  editServiceTypeAction,
  deleteServiceTypeAction,
} from './ServiceTypeActions';

export {
  getAllProgramsAction,
  getProgramByIdAction,
  addProgramAction,
  editProgramAction,
  deleteProgramAction,
} from './programActions';

export {
  getAllEmployeeAction,
  getEmployeeByIdAction,
  addEmployeeAction,
  editEmployeeAction,
  deleteEmployeeAction,
} from './employeeActions';
