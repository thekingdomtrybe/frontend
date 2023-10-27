import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
import Button from '@/components/Button/Button';
import { useSetLiveStreamStatusMutation, useUpdateLiveStreamUrlMutation } from '@/services/tkt-backend/live';
import Styles from './LiveStream.module.scss';

function LiveStreamControls({
  ParentStyles,
}) {
  const [updateLiveStreamURL,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useUpdateLiveStreamUrlMutation();

  const [setLiveStreamStatus,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useSetLiveStreamStatusMutation();

  // console.log(
  //   'isSubmitting:', isSubmitting,
  //   'isSubmitSuccess:', isSubmitSuccess,
  //   'isSubmitError:', isSubmitError,
  //   'submitError:', submitError,
  // );

  const fields = {
    youtubeUrl: [
      {
        label: 'Youtube URL',
        name: 'url',
        type: 'url',
      },
    ],
  };

  const submitLiveStreamURLUpdateForm = (e, formState) => {
    e.preventDefault();
    updateLiveStreamURL(formState);
  };

  const startLiveStream = () => {
    setLiveStreamStatus({ status: true });
  };

  const stopLiveStream = () => {
    setLiveStreamStatus({ status: false });
  };

  return (
    <div className={ParentStyles['control-group']}>
      <h3>Live Stream</h3>
      <div className={ParentStyles['control-group-items']}>
        <div className={ParentStyles['control-group-item']}>
          <Form
            fields={fields.youtubeUrl}
            fieldSize="smaller"
            gap="small"
            onSubmit={submitLiveStreamURLUpdateForm}
            submitButtonContent="Save"
            submitButtonVariant="blue-1"
            submitButtonFullWidth
            submitButtonSize="small"
          />
        </div>

        <div className={Styles['live-stream-controls']}>
          <h4>Live Stream Controls</h4>
          <div className={Styles['live-stream-controls-buttons']}>
            <Button
              type="button"
              content="Start live stream"
              variant="orange-1"
              size="small"
              onClick={startLiveStream}
            />
            <Button
              type="button"
              content="Stop live stream"
              variant="orange-1"
              size="small"
              onClick={stopLiveStream}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

LiveStreamControls.propTypes = {
  ParentStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default LiveStreamControls;
