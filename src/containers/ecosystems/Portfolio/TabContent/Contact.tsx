import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Header } from 'components/molecules/Header';
import { ContactData, SendContactMessageResult } from 'ducks/contact';
import { RequestStatus } from 'lib/RequestResult';
import React from 'react';

type ContactProps = {
  sentContact: SendContactMessageResult | undefined;
  sendMessageResult: RequestStatus | undefined;
  onClickSendMessage: (contactData: ContactData) => void;
};

export const Contact: React.FC<ContactProps> = ({
  sentContact,
  sendMessageResult,
  onClickSendMessage,
}) => {
  const [nameInput, setNameInput] = React.useState<string>('');
  const [emailInput, setEmailInput] = React.useState<string>('');
  const [messageInput, setMessageInput] = React.useState<string>('');

  const [nameErrorText, setNameErrorText] = React.useState<string>('');
  const [emailErrorText, setEmailErrorText] = React.useState<string>('');
  const [messageErrorText, setMessageErrorText] = React.useState<string>('');

  const [isFailedToCheck, setFailedToCheck] = React.useState<boolean>(false);

  const isSentContactMessage = sentContact !== undefined;
  const isLoading: boolean =
    sendMessageResult !== undefined && sendMessageResult === 'pending';
  const isFailedToSend: boolean =
    sendMessageResult !== undefined && sendMessageResult === 'rejected';

  const isEmptyValue = (value: string) => value.length === 0;
  const isInvalidEmail = (email: string) =>
    email.split('@').length !== 2 ||
    email.split('@')[0].length === 0 ||
    email.split('@')[1].length === 0 ||
    !email.split('@')[1].includes('.');
  const checkSendEmail = (name: string, email: string, message: string) =>
    !isEmptyValue(name) &&
    !isEmptyValue(email) &&
    !isEmptyValue(message) &&
    !isInvalidEmail(email);

  const checkName = (name: string) =>
    setNameErrorText(isEmptyValue(name) ? '名前を入力してください' : '');

  const checkEmail = (email: string) => {
    setEmailErrorText(
      isEmptyValue(email)
        ? 'メールアドレスを入力してください'
        : isInvalidEmail(email)
        ? '不正なメールアドレスです'
        : ''
    );
  };

  const checkMessage = (message: string) =>
    setMessageErrorText(isEmptyValue(message) ? 'メッセージが空です' : '');

  return (
    <>
      <Header iconName="contact" title="連絡先" explanation="" />
      <Box display="flex" alignItems="center">
        <Card sx={{ maxWidth: 450, height: 512, m: 1, p: 1 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <Typography fontSize="h6.fontSize">Contact Us</Typography>
                <Typography variant="body2" color="textSecondary">
                  メッセージ送る用のフォームです。
                </Typography>
                {isFailedToCheck ? (
                  <Alert severity="error">入力内容に誤りがあります。</Alert>
                ) : isFailedToSend ? (
                  <Alert severity="error">
                    メッセージの送信に失敗しました。
                  </Alert>
                ) : (
                  <></>
                )}
              </Grid>
              <Grid xs={12} item>
                <TextField
                  data-testid="inputContactName"
                  label="Name"
                  value={nameInput}
                  onChange={(event) => {
                    checkName(event.target.value);
                    setNameInput(event.target.value);
                  }}
                  placeholder="Enter your name"
                  variant="outlined"
                  error={nameErrorText.length !== 0}
                  helperText={nameErrorText}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  data-testid="inputContactEmail"
                  label="Email"
                  value={emailInput}
                  onChange={(event) => {
                    checkEmail(event.target.value);
                    setEmailInput(event.target.value);
                  }}
                  placeholder="Enter your email address"
                  variant="outlined"
                  error={emailErrorText.length !== 0}
                  helperText={emailErrorText}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  data-testid="inputContactMessage"
                  label="Message"
                  multiline
                  rows={6}
                  value={messageInput}
                  onChange={(event) => {
                    checkMessage(event.target.value);
                    setMessageInput(event.target.value);
                  }}
                  placeholder="Type your message here"
                  variant="outlined"
                  error={messageErrorText.length !== 0}
                  helperText={messageErrorText}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item mt={4}>
                {isLoading ? (
                  <Button variant="contained" fullWidth disabled>
                    <CircularProgress size={24} />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => {
                      checkName(nameInput);
                      checkEmail(emailInput);
                      checkMessage(messageInput);

                      /*ここでメール送信API呼ぶ */
                      if (checkSendEmail(nameInput, emailInput, messageInput)) {
                        // TODO: 確認画面出す
                        onClickSendMessage({
                          name: nameInput,
                          email: emailInput,
                          message: messageInput,
                        });
                        setFailedToCheck(false);
                      } else {
                        setFailedToCheck(true);
                      }
                    }}
                    disabled={isLoading || isSentContactMessage}
                  >
                    {isSentContactMessage ? '送信済み' : 'Submit'}
                  </Button>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
