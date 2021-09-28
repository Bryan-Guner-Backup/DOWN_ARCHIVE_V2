import { Phases, Status } from './enums';

export const filterStudiesPhase = (data, phase) => {
    switch (phase) {
        case Phases.phase1:
            return data.studies.filter(study => study.phase === 1);

        case Phases.phase2:
            return data.studies.filter(study => study.phase === 2);

        case Phases.phase3:
            return data.studies.filter(study => study.phase === 3);

        default:
            return [...data.studies];
    }
}

export const filterStudiesStatus = (data, status) => {
    switch (status) {
        case Status.open:
            return data.studies.filter(study => study.status === "Open");

        case Status.active:
            return data.studies.filter(study => study.status === "Active");

        case Status.closed:
            return data.studies.filter(study => study.status === "Closed");

        default:
            return [...data.studies];
    }
}