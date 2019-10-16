package cc.agileintelligence.costarcast.services;

import cc.agileintelligence.costarcast.domain.Project;
import cc.agileintelligence.costarcast.repositories.ProjectRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepositories projectRepository;

    public Project saveOrUpdateProject(Project project) {

        // Logic


        return projectRepository.save(project);
    }
}
