// import ReactList from 'react-list';
// import LazyLoading from 'react-list-lazy-load';
import classes from './List.module.css';
import { ListItem } from '../ListItem';

export type entry = {
    date: string;
    heading: string;
    html: string;
    tags: string[];
    tracker: any[];
};

interface ListProps {
    entries: entry[];
}

const List = ({ entries }: ListProps) => {
    return (
        <div className={classes.root}>
            <ul>
                {entries.map((entry) => {
                    return (
                        <ListItem entry={entry} key={entry.date}/>
                    );
                })}
            </ul>
        </div>
    );
};

export { List };
