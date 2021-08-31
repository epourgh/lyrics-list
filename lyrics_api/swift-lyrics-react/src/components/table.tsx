import { LyricInterface } from '../interface';
import {Button, Table} from "reactstrap";
import { useState } from 'react';

const TableComponent = (props: any) => {

  const [ sectionAlphanumed, setSectionAlphanumed ] = useState('');

  const sortHandler = (params: string) => {

        let keyObject: any = [];

        // The values that will be alphabetized will be set as keys,
        // for albums, there will be nested arrays of lyrics that are in the album, 
        // which will need to be flattened at the end
        props.filteredLyrics.forEach((lyric: LyricInterface) => {

            let name: string = (params === 'SONG') ? lyric['song'].name.toLowerCase() : 
                               (params === 'ALBUM') ? lyric['album'].name.toLowerCase() : lyric.text.toLowerCase();

            name = name.trim();

            if(!keyObject[name]) {
                keyObject[name] = [];
            }

            keyObject[name].push(lyric);
        })

        // Some keys might have random spaces which need to be removed
        let sortedObj: any = Object.keys(keyObject).map(string => string).sort()
                                   .map((objContent: any) => keyObject[objContent]).flat();

        // allow for double clicks to reverse the selection
        if (sectionAlphanumed === params) {
            sortedObj = sortedObj.reverse();
            setSectionAlphanumed('')
        } else {
            setSectionAlphanumed(params)
        }

        props.setFilteredLyrics(sortedObj);

    }
  
    return (
        <>
            <Table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Lyrics <Button className="sortButton" onClick={() => sortHandler('LYRICS') }>Sort</Button></th>
                    <th>Song <Button className="sortButton" onClick={() => sortHandler('SONG') }>Sort</Button></th>
                    <th>Album <Button className="sortButton" onClick={() => sortHandler('ALBUM') }>Sort</Button></th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                
                    {/* 
                        Lyrics sliced by number of lyrics displayed, 
                        followed by checking whether the search input is in either the lyrics, song or album names 
                    */}
                    
                        {
                            (props.filteredLyrics.length > 0)?
                            <tbody>
                                {
                                    props.filteredLyrics?.map((lyric: LyricInterface, index: number) => {
                                    
                                        return (
                                            <tr key={lyric.id}>
                                                <th scope="row">{lyric.id}</th>
                                                <td>{lyric.text}</td>
                                                <td>{lyric.song.name}</td>
                                                <td>{lyric.album.name}</td>
                                                <td>Edit</td>
                                                <td>Delete</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>:<></>
                        }
                    
            </Table>
            {
                (props.filteredLyrics.length === 0)?<div className="centered-div">No matching search results.</div>:<></>
            }
        </>


    )
}

export default TableComponent
