import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../components/index';
import './resume.scss';

function Resume() {
  const { t } = useTranslation();
  return (
    <div className="max-content-width">
      <Stack className="resume" flexDirection="column">
        <Stack className="resume-headers resume-stack" flexDirection="column" alignItems="center">
          <h1>{t('common.name')}</h1>
          <h2>{t('common.title')}</h2>
        </Stack>
        <Stack className="resume-stack" flexDirection="column">
          <h3 className="resume-section-header">{t('resume.workExperience')}</h3>
          {t('resume.jobs', { returnObjects: true }).map((job) => (
            <>
              <p>{job.company}</p>
              <p>{`${job.title}: ${job.dates}`}</p>
              <ul>
                {job.experiences.map((experience) => (
                  <li>{experience}</li>
                ))}
              </ul>
            </>
          ))}
          <h3 className="resume-section-header">{t('resume.educationTech')}</h3>
          <Stack justifyContent="space-between">
            <Stack flexDirection="column">
              {t('resume.schools', { returnObjects: true }).map((school) => (
                <Stack flexDirection="column">
                  <p>{school.name}</p>
                  <p>{school.major}</p>
                  {school.extras.map((extra) => (
                    <p>{extra}</p>
                  ))}
                </Stack>
              ))}
            </Stack>
            <Stack flexDirection="column">
              {t('resume.techStack', { returnObjects: true }).map((tech) => (
                <p>{tech}</p>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default Resume;
