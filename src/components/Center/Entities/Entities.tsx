import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import Filter from "./Filter";
import _ from "lodash";
import {FC, FormEvent, useEffect, useState} from "react";
import { Colors} from "../../../../src/styledHelpers/Colors";
import { FontSize } from "../../../../src/styledHelpers/FontSize";
import { getPhoto } from "../../../api/photoAPI";
import { IEntity } from "../../../interfaces/IEntity";
import { IFilter } from "../../../interfaces/IFilter"

const Wrapper = styled.div``;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        border:none;
    };
    .pageTitle{
        font-size: ${FontSize[24]};
        margin-bottom: 10px;
    }
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: ${(props: {displayType: number}) => props.displayType == 0 ? 'repeat(4, 1fr)' : '1fr'};
    gap: 10px;
`;

const Card = styled.div`
    display:flex;
    border-radius: 15px;
    background-color: ${Colors.white };
    .textContainer{
        margin-left:5px;
    };
    .entityName{
        font-size: ${FontSize[18]};
        color: ${Colors.blue};
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 50px;
    };
    .entityAddress{
        color: ${Colors.black};
    };
`;

const Filters = styled.div`
    .innerFilterWrapper{
        margin-top:10px;
        display:flex;
        justify-content: space-between;
        margin-bottom: 10px;
    };
    button{
        margin-right: 10px;
    }
`;

const TitleFilter = styled.input`
    border: 1px solid lightgrey;
    background: ${Colors.white} url("/icons/search.png") no-repeat;
    background-position-x: calc(100% - 10px);
    background-position-y: center;
    background-size: 15px 15px;
    padding: 5px 30px 5px 10px;
    width: 200px;
    color: blue;
    display:flex;
    height: 15px;
    &:focus {
        outline: 1px solid ${Colors.black};
    };
`;

const Entities: FC = () => {

    const companyName = ["Subsid Corp ltd", "World Company SAS"];
    const street = "Caracas 1050";
    const city = "Distrio Capital";
    const country = "Venezuela";
    const [sort, setSort] = useState("AZ");
    const [initialized, setInitialized] = useState(false);
    const [displayType, setDisplayType] = useState<number>(0);
    const [filtersChanged, setFiltersChanged] = useState(false);
    const [titleFilter, setTitleFilter] = useState('');
    const [filterRef, filtersOpen, toggleFilters] = useDropdown();
    const [entities, setEntities] = useState<IEntity[]>([]);
    const [options, setOptions] = useState<IFilter[]>([]);
    const [genericEntities, setGenericEntities] = useState<IEntity[]>([]);

    useEffect(() => {
        const fillEntities = async () => {
            const ent: IEntity[] = [];
            for (let i = 1; i <= 24; i++) {
                const entity: IEntity = {
                    name: `${_.sample(companyName)}`,
                    address: `${street}, ${city}, ${country}`,
                    photo: await getPhoto(i),
                };
                ent.push(entity);
            }
            const compare = (a: IEntity, b: IEntity) => {
                if (a.name[0] < b.name[0]) return -1;
                if (a.name[0] > b.name[0]) return 1;
                return 0;
            }
            ent.sort(compare);
            setEntities(ent);
            setGenericEntities(ent);
            setInitialized(true);
        }

        if (!initialized) {
            fillEntities();
        }

        if (filtersChanged) {
            applyFilters();
            setFiltersChanged(false);
        }
    });

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    const toggleSort = () => {
        setSort(sort == 'AZ' ? 'ZA' : 'AZ');
        setFiltersChanged(true);
    };
    const handleTitleFilterInput = (ev: FormEvent) => {
        const target = ev.target as HTMLInputElement;
        setTitleFilter(target.value);
        setFiltersChanged(true);
    };
   
    const applyFilters = () => {
        let collection = [...genericEntities];
        if(titleFilter.length > 0) {
            collection = collection.filter(entity => entity.name.toLowerCase().includes(titleFilter.toLowerCase()));
        }
        if(sort == 'ZA') {
            collection = collection.reverse();
        }
        setEntities([...collection]);
    };

    return (
        <Wrapper>
            <Header>
                <div className='pageTitle'>Entities</div>
                <div className='displayTypeButtonsContainer'>
                    <button onClick={() => setDisplayType(0)}> {displayType == 0 ? 'Mosaic' : 'Mosaic'}</button> 
                    <button onClick={() => setDisplayType(1)}> {displayType == 1 ? 'List' : 'List'}</button>
                </div>
            </Header>

            <Filters>
                <div>
                    <button onClick={toggleSort} >{sort == 'AZ' ? (<div/>) : (<div/>)} Sort</button>
                    <button  onClick={toggleFilters}>Filter</button>
                    <button onClick={copyLink}> Share</button>
                </div>

                <div className="innerFilterWrapper">
                    <div> {filtersOpen && <Filter options={options} setOptions={setOptions} />}</div>
                    <TitleFilter onInput={handleTitleFilterInput} placeholder='Search...' />
                </div>
            </Filters>
            <Content displayType={displayType}>
                {entities.map(entity => (
                    <Card>
                        <img className='entityImage' src={entity.photo.thumbnailUrl} />
                        <div className="textContainer">
                            <div className="entityName">{entity.name}</div>
                            <div className="entityAddress">{entity.address}</div>
                        </div>
                    </Card>
                ))}
            </Content>
        </Wrapper>
    );
}
export default Entities;
