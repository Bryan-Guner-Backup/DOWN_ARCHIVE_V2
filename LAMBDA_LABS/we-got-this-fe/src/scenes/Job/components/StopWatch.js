import React, {useState, useEffect} from 'react';
import StopWatchDisplay from './StopWatchDisplay';
import StopWatchButtons from './StopWatchButtons';
import {useStateValue} from '../../../state';
import {actions} from '../../../state/jobs/jobsActions';
import {useLocation} from 'react-router-dom';

function StopWatch({job}) {
	// TODO: try to fetch existing value from database (job document) and use that value as initial value for the timer

	const [{time: timeFromDb}, dispatch] = useStateValue();
	const [time, setTime] = useState(job.time || {ms: 0, s: 0, m: 0, h: 0});
	const [interv, setInterv] = useState();
	const [status, setStatus] = useState(0);

	// Not started = 0
	// started = 1
	// stopped = 2
	const location = useLocation();
	useEffect(() => {
		setTime(job.time || {ms: 0, s: 0, m: 0, h: 0});
	}, [job.time]);
	const start = () => {
		run();
		setStatus(1);
		setInterv(setInterval(run, 10));
	};

	var updatedMs = time.ms,
		updatedS = time.s,
		updatedM = time.m,
		updatedH = time.h;

	const run = () => {
		if (updatedM === 60) {
			updatedH++;
			updatedM = 0;
		}
		if (updatedS === 60) {
			updatedM++;
			updatedS = 0;
		}
		if (updatedMs === 100) {
			updatedS++;
			updatedMs = 0;
		}
		updatedMs++;
		return setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH});
	};

	const stop = () => {
		clearInterval(interv);
		setStatus(2);
		actions.addJobTime(dispatch, {time: time, jobId: location.state});
		// TODO: add time elapsed to database using the existing redux store
	};

	const reset = () => {
		clearInterval(interv);
		setStatus(0);
		setTime({ms: 0, s: 0, m: 0, h: 0});
	};

	const resume = () => start();

	return (
		<div className='main-section'>
			<div className='clock-holder'>
				<div className='stopwatch'>
					<StopWatchDisplay time={time} />
					<StopWatchButtons
						status={status}
						resume={resume}
						reset={reset}
						stop={stop}
						start={start}
					/>
				</div>
			</div>
		</div>
	);
}

export default StopWatch;
