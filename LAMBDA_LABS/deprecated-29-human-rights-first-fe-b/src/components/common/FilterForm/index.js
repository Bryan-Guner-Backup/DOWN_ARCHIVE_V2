import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Select,
  Input,
  Checkbox,
  Button,
  Typography,
  DatePicker,
  Row,
  Col,
} from 'antd';
import { updateFilters } from '../../../state/actions';
import 'antd/dist/antd.css';
import './FilterForm.css';
import statesDB from '../../../database/states.json';
import { incidents, sources, initialTemporaryChanges } from './assets';

const { Title } = Typography;
const { Option } = Select;
const { Search } = Input;
const { RangePicker } = DatePicker;

export default function FiltersForm() {
  const dispatch = useDispatch();

  const [temporaryChanges, setTemporaryChanges] = useState(
    initialTemporaryChanges
  );
  // filter out Alaska and Hawaii -- Maybe include them in a cutout?
  const filteredStates = statesDB.filter(state => {
    return state.state !== 'Alaska' && state.state !== 'Hawaii';
  });

  // This changes the incident name to match the keys of the initialIncidents object
  const getKeyFromName = name => {
    let key = [...name].filter(char => char !== ' ');
    key[0] = key[0].toLowerCase();
    key = key.join('');

    return key;
  };
  return (
    <div className="filter-box">
      <div className="search-bars">
        {/* RangePicker not yet implemented
        onChange needs to filter incidents where date >= selectedDate1 and date <= selectedDate2 
        */}
        <RangePicker allowClear />

        <Select
          allowClear
          showSearch // useful to not have to scroll through 50+ items to find what you're looking for
          onSelect={stateName => {
            setTemporaryChanges({ ...temporaryChanges, stateName });
            dispatch(updateFilters({ stateName }));
          }}
          placeholder="Select a State"
          style={{ width: 150 }}
          value={temporaryChanges.stateName}
        >
          {filteredStates.map(state => {
            return <Option value={state.state}>{state.state}</Option>;
          })}
        </Select>
        <Search
          placeholder="Zip Code"
          allowClear
          onSearch={(value, e) => dispatch(updateFilters({ zipCode: value }))}
          style={{ width: 150 }}
          onChange={e =>
            setTemporaryChanges({
              ...temporaryChanges,
              zipCode: e.target.value,
            })
          }
          value={temporaryChanges.zipCode}
        />
        <Button
          type="link"
          onClick={() => {
            setTemporaryChanges(initialTemporaryChanges);
            dispatch(updateFilters(initialTemporaryChanges));
          }}
        >
          Reset Filters
        </Button>
      </div>
      <div className="filter-types">
        <div className="incident-filters">
          <Title level={5}>Incident Type</Title>
          <div className="checkboxes">
            <Row>
              {incidents.map((incident, id) => {
                return (
                  <Col span={12}>
                    <Checkbox
                      key={id}
                      checked={
                        temporaryChanges.incidents[getKeyFromName(incident)]
                      } // Control the "checked" attribute with the boolean value of the state.
                      onClick={e => {
                        let incidentKey = getKeyFromName(incident);
                        setTemporaryChanges({
                          ...temporaryChanges,
                          incidents: {
                            ...temporaryChanges.incidents,
                            [incidentKey]: e.target.checked,
                          },
                        });
                      }}
                    >
                      {incident}
                    </Checkbox>
                  </Col>
                );
              })}
              <Button
                type="link"
                onClick={() => dispatch(updateFilters(temporaryChanges))}
              >
                Apply Filters
              </Button>
            </Row>
          </div>
        </div>

        {/* Sources are not yet implemented, use same structure as Filters above */}

        <div className="source-filters">
          <Title level={5}>Source Type</Title>
          <div className="checkboxes">
            <Row>
              {sources.map((source, id) => {
                return (
                  <Col span={12}>
                    <Checkbox
                      value={source}
                      onChange={() => console.log({ source })}
                    >
                      {source}
                    </Checkbox>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
