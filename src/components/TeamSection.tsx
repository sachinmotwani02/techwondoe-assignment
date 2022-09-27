import React, { useEffect, useState, useCallback } from 'react';
import { setEnvironmentData } from 'worker_threads';
import team from '../assets/images/team.png';
import vectorSVG from '../assets/vectorSVG/vector-svg-3.svg';
import { client } from '../client';
import { ITeamData, Team, ITeam } from '../custom-hooks/Team';

const TeamSection = () => {
  const [tdata, setTdata] = useState<ITeam[]>([]);

  useEffect(() => {
    fetchData();
  }, [tdata]);

  const fetchData = async () => {
    try {
      const resp = await client.getEntries({ content_type: 'teamSection' });
      setTdata(resp.items as any);
    } catch (error) {
      console.log(error);
    }
  };

  const Teams = ({ team }: ITeamData) => {
    return (
      <div>
        {team.map((tdata: any, index: number) => (
          <Team tdata={tdata} key={index} />
        ))}
      </div>
    );
  };

  return (
    <section className="body-font relative bg-team_bg">
      <img
        src={vectorSVG}
        className="absolute left-0 -top-20 hidden md:block"
        style={{ height: '99%' }}
      />
      <Teams team={tdata} />
    </section>
  );
};

export default TeamSection;
