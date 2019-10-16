package cc.agileintelligence.costarcast.repositories;


import cc.agileintelligence.costarcast.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {


}
