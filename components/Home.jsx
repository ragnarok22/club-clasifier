import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import BaseLayout from "../layouts/BaseLayout";
import { formatTime, metersToKilometers } from "../utils";

const Home = () => {
  const club = {
    profile:
      "https://dgalywyr863hv.cloudfront.net/pictures/clubs/542243/12567539/2/large.jpg",
    name: "CUBAN TRAIL TEAM",
    url: "https://cubantrailteam.com",
  };
  const [clubActivities, setClubActivities] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/club/activities");
      setClubActivities(data);
    })();
  }, []);

  return (
    <BaseLayout>
      <div className="text-center">
        <Image src={club.profile} alt={club.name} width="200" height="200" />
        <h1 className="text-center">
          <a href={club.url}>{club.name}</a>
        </h1>
        <div className="flex">
          <p>{club.member_count}</p>
        </div>
        {/* <p className="mt-2 text-justify">{club.description}</p> */}
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Distancia
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tiempo
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clubActivities.map((activity, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {/* <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={activity.image} alt="" />
                        </div> */}
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {activity.athlete.firstname} {activity.athlete.lastname}
                            </div>
                            {/* <div className="text-sm text-gray-500">{activity.email}</div> */}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {metersToKilometers(activity.distance)} km
                        </div>
                        {/* <div className="text-sm text-gray-500">{activity.department}</div> */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatTime(activity.moving_time)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
