import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../components/index';
import resume from '../../assets/files/bryan_aument.pdf';
import { ReactComponent as DownloadIcon } from '../../assets/pictograms/document-download.svg';
import './resume.scss';

function Resume() {
  const { t } = useTranslation();
  return (
    <div>
      <Stack className="resume" flexDirection="column">
        <Stack className="resume-headers resume-stack" flexDirection="column" alignItems="center">
          <h1>{t('common.name')}</h1>
          <div>
            <h2 className="resume-highlighted-item">{t('common.title')}</h2>
            <a className="resume-download-button text-button" title="download" href={resume} download="bryan_aument.pdf">
              <DownloadIcon className="resume-download-icon" />
            </a>
          </div>
        </Stack>
        <Stack className="resume-stack" flexDirection="column">
          <h3 className="resume-section-header resume-highlighted-item">{t('resume.workExperience')}</h3>
          {t('resume.jobs', { returnObjects: true }).map((job, index) => (
            <React.Fragment key={`${job.company}-${index + 1}`}>
              <h4 className="resume-work-header">{job.company}</h4>
              <p>{`${job.title}: ${job.dates}`}</p>
              <ul>
                {job.experiences.map((experience) => (
                  <li key={`${experience}`}>{experience}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
          <h3 className="resume-stack resume-section-header resume-highlighted-item">{t('resume.educationTech')}</h3>
          <Stack justifyContent="space-between">
            <Stack flexDirection="column">
              {t('resume.schools', { returnObjects: true }).map((school, index) => (
                <Stack flexDirection="column" key={`${school}-${index + 1}`}>
                  <h4 className="resume-education-header">{school.name}</h4>
                  <p>{school.major}</p>
                  {school.extras.map((extra) => (
                    <p key={extra}>{extra}</p>
                  ))}
                </Stack>
              ))}
            </Stack>
            <Stack flexDirection="column">
              {t('resume.techStack', { returnObjects: true }).map((tech, index) => (
                <p key={`${tech}-${index + 1}`}>{tech}</p>
              ))}
            </Stack>
          </Stack>
          <h3 className="resume-stack resume-section-header resume-highlighted-item">{t('resume.additional')}</h3>
          <ul>
            {t('resume.other', { returnObjects: true }).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Stack>
      </Stack>
    </div>
  );
}

export default Resume;
