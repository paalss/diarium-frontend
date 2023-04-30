import classes from './List.module.css';

type entry = {
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
                        <li key={entry.date}>
                            <h2>{entry.heading}</h2>
                            <p>
                                {entry.date}

                                {entry.tags.length >= 1 ? (
                                    <>
                                        {' '}
                                        - Tags:{' '}
                                        {entry.tags.map((tag) => (
                                            <span key={tag}>{tag} </span>
                                        ))}
                                    </>
                                ) : (
                                    <> - No tags</>
                                )}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export { List };
