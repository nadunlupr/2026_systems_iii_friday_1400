function GroupCard({isSelected, id, onCardClick, grpName}) {
    return (
        <div className={isSelected ? "group-card-selected" : ''}
            onClick={() => onCardClick(id)}>
            <h1>Group Name: {grpName}</h1>
            <p>Description: Not the best</p>
        </div>
    )
}

export default GroupCard;