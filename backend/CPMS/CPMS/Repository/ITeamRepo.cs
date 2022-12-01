using CPMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPMS.Repository
{
    public interface ITeamRepo
    {
        public Task<bool> CreateTeam(Team Team, int[] EmployeeIds);
        public Task<Team> GetTeamById(int id);
        public Task<bool> EditTeam(int id, Team team, int[] emloyeeIds);
        public Task<bool> DeleteTeam(int id);
        public Task<List<Team>> GetTeamsWithNoProject();
        public Task<List<Team>> GetTeamsUnderProject(int id);
        public Task<List<Team>> GetAllTeams();
    }
}
