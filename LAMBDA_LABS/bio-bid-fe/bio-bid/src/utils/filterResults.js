import {Phases, Status} from './enums';
import {filterStudiesStatus, filterStudiesPhase} from './filter';

export function filterResults(data, phase1, phase2, phase3, openStatus, closed, active) {
    let phaseList = [];
    let phaseTemp = [];
    let statusList = [];
    let statusTemp = [];

    if (phase1) {
        phaseTemp = filterStudiesPhase(data, Phases.phase1);
        phaseList.push(...phaseTemp);

    }

    if (phase2) {
        phaseTemp = filterStudiesPhase(data, Phases.phase2);
        phaseList.push(...phaseTemp);
    }

    if (phase3) {
        phaseTemp = filterStudiesPhase(data, Phases.phase3);
        phaseList.push(...phaseTemp);
    }

    if (openStatus) {
        statusTemp = filterStudiesStatus(data, Status.open);
        statusList.push(...statusTemp);

    }

    if (active) {
        statusTemp = filterStudiesStatus(data, Status.active);
        statusList.push(...statusTemp);
    }

    if (closed) {
        statusTemp = filterStudiesStatus(data, Status.closed);
        statusList.push(...statusTemp);
    }

    const finalList = [];

    if (phaseList.length > 0) {
        for (let i = 0; i < (phaseList.length + statusList.length); i++) {
            if (phaseList[i] === statusList[i]) {
                finalList.push(phaseList[i])
            }
            else {
                const tempList = [phaseList[i], statusList[i]];
                finalList.push(...tempList);
            }
        }
    }
    else {
        for (let k = 0; k < statusList.length; k++) {
            finalList.push(statusList[k]);
        }
    }
    const returnList = [];

    for (let m = 0; m < finalList.length; m++) {
        if (finalList[m] !== undefined && finalList[m] !== finalList[m + 1]) {
            returnList.push(finalList[m]);
        }
    }
    return returnList;
}