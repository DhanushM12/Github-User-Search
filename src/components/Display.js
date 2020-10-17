import React from "react";

const DisplayTable = ({ data, repositories }) => {
  console.log(data);
  console.log(repositories);
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
          <th>Followers</th>
          <th>Location</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </td>
          <td>{data.followers}</td>
          <td>{data.location}</td>
          <td>
            {repositories.map((repo) => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
