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
          <h2 className="resume-highlighted-item">{t('common.title')}</h2>
        </Stack>
        <Stack className="resume-stack" flexDirection="column">
          <h3 className="resume-section-header resume-highlighted-item">{t('resume.workExperience')}</h3>
          {t('resume.jobs', { returnObjects: true }).map((job) => (
            <>
              <h4 className="resume-work-header">{job.company}</h4>
              <p>{`${job.title}: ${job.dates}`}</p>
              <ul>
                {job.experiences.map((experience) => (
                  <li>{experience}</li>
                ))}
              </ul>
            </>
          ))}
          <h3 className="resume-stack resume-section-header resume-highlighted-item">{t('resume.educationTech')}</h3>
          <Stack justifyContent="space-between">
            <Stack flexDirection="column">
              {t('resume.schools', { returnObjects: true }).map((school) => (
                <Stack flexDirection="column">
                  <h4 className="resume-education-header">{school.name}</h4>
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
          <h3 className="resume-stack resume-section-header resume-highlighted-item">{t('resume.additional')}</h3>
          <ul>
            {t('resume.other', { returnObjects: true }).map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Stack>
      </Stack>
    </div>
  );
}

export default Resume;
