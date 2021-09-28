// Make a separate Temporary Changes state to act as a staging ground for the changes, so that global state is only changed once.

const initialIncidents = {
  policePresence: true,
  emptyHandForce: true,
  bluntForceWeapons: true,
  chemicalAndElectricalWeapons: true,
  lethalForce: true,
};

const initialTemporaryChanges = {
  stateName: null,
  zipCode: null,
  startDate: '',
  endDate: '',
  incidents: initialIncidents,
};

const incidents = [
  'Police Presence',
  'Empty Hand Force',
  'Blunt Force Weapons',
  'Chemical And Electrical Weapons',
  'Lethal Force',
];

const sources = ['One', 'Two', 'Three', 'Four'];

export { incidents, sources, initialTemporaryChanges };
