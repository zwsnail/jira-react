import React from 'react';
import { SearchPanel } from './search-panel';
import { List } from './list';
import { useState, useEffect } from 'react';
import { cleanObject, useMount } from '../../utils';
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL
console.log(apiUrl)
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const [users, setUsers] = useState({})

    const [list, setList] = useState([])
    //当param变化时，重新获取 URL
    useEffect(() => {
        // fetch(`${apiUrl}/projects`, {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param])

    useMount(() => {
        // fetch(`${apiUrl}/users`, {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPanel param={param} setParam={setParam} users={users} setUsers={setUsers} />
        <List list={list} setList={setList} users={users} setUsers={setUsers} />
    </div>
}