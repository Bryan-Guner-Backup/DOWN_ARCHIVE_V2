import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import { EllipsisOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";

import { GET_STUDIES } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import * as JsSearch from 'js-search';


/* IMAGE IMPORTS */
import { ReactComponent as SearchIcon } from '../images/search.svg';
import { ReactComponent as FilterIcon } from '../images/filter-2.svg';

import CheckBoxFilters from '../components/bids/CheckBoxFilters';

import {filterResults} from '../utils/filterResults';
import {tableHeaders} from '../utils/tableHeaders';

export {React, useEffect, useState, Table, EllipsisOutlined, Button, GET_STUDIES, useQuery, moment, JsSearch, SearchIcon, FilterIcon, CheckBoxFilters, filterResults, tableHeaders}