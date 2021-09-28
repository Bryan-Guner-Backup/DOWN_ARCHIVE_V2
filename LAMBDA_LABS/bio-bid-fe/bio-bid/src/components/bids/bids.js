import {React, useState, useEffect, Table, EllipsisOutlined, Button, GET_STUDIES, useQuery, moment, JsSearch, SearchIcon, FilterIcon, CheckBoxFilters, filterResults, tableHeaders} from '../../imports/bidsImports';

/* STYLE IMPORT */
import './styles/CP-dash-header.css';
import './styles/dash.css';
import './styles/global.css';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bids = (props) => {

  const {data} = useQuery(GET_STUDIES);

  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [studies, setStudies] = useState([]);

  const [phase1, setPhase1] = useState(false);
  const [phase2, setPhase2] = useState(false);
  const [phase3, setPhase3] = useState(false);

  const [openStatus, setOpenStatus] = useState(false);
  const [closed, setClosed] = useState(false);
  const [active, setActive] = useState(false);

  const search = new JsSearch.Search('name');

  search.addIndex('name');
  search.addIndex('area');
  search.addIndex('protocol_number');
  search.addIndex('title');

  const handleSearch = (event) => {

      event.preventDefault();

      if (value.length <= 0)
          setStudies(data.studies);
      else
          setStudies(search.search(value));

  }

  const processSearch = (event) => {

      event.preventDefault();

      setValue(event.target.value);

      if (value.length <= 0)
          setStudies(data.studies);
      else
          setStudies(search.search(value));

  }

  const processFilter = () => {

    setOpen(!open);
    props.shadow();

  }

  const handleFilterResults = (event) => {
    event.preventDefault();
    setStudies(filterResults(data, phase1, phase2, phase3, openStatus, closed, active));
  }

const clearFilters = () => 
{
  setPhase1(false);
  setPhase2(false);
  setPhase3(false);
  setOpenStatus(false);
  setClosed(false);
  setActive(false);
  setStudies(data.studies);
}

  useEffect(() => {
      if (data !== undefined) {
          search.addDocuments(data.studies);
          if (studies.length <= 0 && value.length <= 0)
              setStudies(data.studies);
      }
    }, [data, search, studies.length, value.length]);

  return (
    <div className="tableheader" id='core-wrapper'>
      <div id='content-container'>
        <div id='current-projects-header' style={{ marginBottom: '20px' }}>
          <p id='current-projects-header-text-1'>Current Projects</p>
          <div id='input-container'>
            <form onSubmit={event => handleSearch(event)} style={{ display: 'flex' }}>
              <SearchIcon id='search-icon' />
              <input onChange={event => processSearch(event)} id='search-input' placeholder='Enter a keyword' />
              <button id='search-button'>Search</button>
            </form>
          </div>
          {/* <div id='current-projects-header-2'>
            <p id='current-projects-header-text-2' onClick={() => { createStudy() }} >Create new study</p>
            <AddIcon style={{ width: '16px', height: '16px', margin: '8px 8px 8px 12px' }} />
          </div> */}
          <div id='filter-container'>
            <div id='filter-sub-container' onClick={() => processFilter() } >
              <p id='filter-text'>Filter</p>
            </div>
            <FilterIcon id='filter-icon' onClick={() => processFilter() } />
          </div>
        </div>
        <Table striped id='core-table'>
          <thead>
            <tr id='bbb'>
              {tableHeaders.map((header, index) => <th key={index}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {data && (studies.map(study => <tr className='aaa' key={study.id}>
                <th scope="row"> <Button className='row-button' style={{ background: (study.status === 'Open' ? '#389E0D' : study.status === 'Active' ? '#FA8C16': '#F5222D') }} >{study.status}</Button></th>
                <td> {study.name}</td>
                <td> {study.area}<br>
                </br> Indication: Back pain<br>
                  </br> Molecule type: Chemical</td>
                <td> {study.protocol_number}<br>
                </br> Title: {study.title} </td>
                <td> {study.phase}</td>
                <td> {study.services}</td>
                <td> {moment(study.modified_date).format('LL')} <br>
              </br> {moment(study.modified_date).format('LTS')}</td>
                <td> <EllipsisOutlined style={{ fontSize: '25px' }} /></td>
              </tr>)
            )}
          </tbody>
        </Table>
      </div>
      <CheckBoxFilters 
        process={processFilter} 
        open={open} 
        handleFilterResults={handleFilterResults}
        clearFilters={clearFilters}
        phase1={phase1}
        setPhase1={setPhase1}
        phase2={phase2}
        setPhase2={setPhase2}
        phase3={phase3}
        setPhase3={setPhase3}
        openStatus={openStatus}
        setOpenStatus={setOpenStatus}
        active={active}
        setActive={setActive}
        closed={closed}
        setClosed={setClosed}
      />
    </div>
  );
}
export default Bids;