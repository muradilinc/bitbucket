import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { selectRepos, selectReposLoading, selectReposOther } from '../../../features/Repos/ReposSlice';
import { getRepositories, getRepositoriesByLogin } from '../../../features/Repos/ReposThunk';
import { selectToken, selectUser } from '../../../features/Auth/AuthSlice';
import { useLocation, useParams } from 'react-router-dom';
import { Repos } from '../../../features/Repos/types/repos';
import { Loader } from '../../../shared/Loader';

export const Repositories = () => {
  const user = useAppSelector(selectUser);
  const token = useAppSelector(selectToken);
  const repos = useAppSelector(selectRepos);
  const reposOther = useAppSelector(selectReposOther);
  const [filteredRepos, setFilteredRepos] = useState<Repos[]>([]);
  const [selectFilter, setSelectFilter] = useState('all');
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const {login} = useParams();
  const loading = useAppSelector(selectReposLoading);

  useEffect(() => {
    if (user && token) {
      dispatch(getRepositories({user, token: token}));
    }
  }, [user, dispatch, token]);

  useEffect(() => {
    if (repos.length > 0) {
      setFilteredRepos(repos);
    }
  }, [repos]);

  useEffect(() => {
    if (login) {
      dispatch(getRepositoriesByLogin(login));
    }
  }, [dispatch, login]);

  const changeField = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectFilter(event.target.value);
    if (event.target.value === 'all') {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(repos.filter(item => item.visibility === event.target.value));
    }
  };

  return (
    <div>
      <div className="rounded-[3px] bg-[rgba(0,0,0,0.3)] backdrop-blur-[20px]">
        <div className="py-[5px] px-[10px] bg-black rounded-tl-[3px] rounded-tr-[3px] flex justify-between">
          <h4 className="text-[#fff] text-[16px] font-extralight">Repositories</h4>
          {!login &&
            pathname !== '/' &&
            <select name="filter" value={selectFilter} onChange={changeField} className="text-[#ebebeb] outline-none border border-[#ebebeb] rounded-[3px] px-[10px] py-[2px]">
              <option value="all">All</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
          }
        </div>
        {
          loading && <Loader/>
        }
        <div className="px-[10px] py-[20px] flex flex-col gap-[21px]">
          {
            (login ? reposOther : pathname === '/' ? repos.slice(0, 5) : filteredRepos).map(repo =>
              <React.Fragment key={repo.id}>
                <a href={repo.html_url} target="_blank">
                  <div
                    className="bg-[rgba(0,0,0,0.3)] backdrop-blur-[20px] rounded-[3px] px-[10px] py-[8px] flex flex-col">
                    <div className="flex justify-between">
                      <h4 className="text-[#ebebeb] text-[14px]">{repo.name}</h4>
                      <p className="text-[#c4c4c4] text-[13px]">{repo.visibility}</p>
                    </div>
                    <p className="text-[#c4c4c4] text-[13px]">{repo.description}</p>
                    <div className="justify-end flex">
                      <a className="text-[#969696]" href={repo.owner.html_url}>{repo.owner.login}</a>
                    </div>
                  </div>
                </a>
              </React.Fragment>
            )
          }
        </div>
      </div>
    </div>
  );
};