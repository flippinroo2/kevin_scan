import { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { Props } from '../interfaces';
import { metadataActions } from '../state/actions';

const { setSiteTitle } = metadataActions;

interface DispatchToProps { setSiteTitle: Dispatch<any>; };
type TempProps = Props & DispatchToProps & { title: string };

const Temp = (props: TempProps) => {
  useEffect(() => {
    props.setSiteTitle(props.title);
  });

  return (
    <div className="under_construction">
      <div className="under_construction__header">
        <h1>WORK IN PROGRESS</h1>
        <h2>{"Check back soon... :)"}</h2>
      </div>
      <div className="under_construction__content">
        <p>This website is a personal project with <b>VERY</b> big goals. Please do not just take one look at the site and immediately judge it.</p>
        <p>Take a look at the <a href="https://github.com/flippinroo2/kevin_scan">repository</a>, there is <b>WAYYY</b> more going on behind the scenes.</p>
        <blockquote>The code may be a bit messy (<i>comments, unused variables, and "<u>any</u>" types</i>) because I'm knee deep in development.</blockquote>
        <p>As I continuously build this application, some things may break. Additionally, I want to mention that I haven't even begun to style this website properly.</p>
        <p>First, I need to get all 4 pages working. Once that's done I need to write a full test suite for all of those features. Once I have those fundamental tasks complete, I will clean up all the code and focus solely on styling.</p>
        <h3>Check out the <a href="https://github.com/flippinroo2/kevin_scan/blob/master/README.md">README.md</a> file to see some of my future goals.</h3>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
  return {
    setSiteTitle: (data: string) => {
      dispatch(
        setSiteTitle(data)
      )
    },
  };
};

export default connect<any, any, any>(null, mapDispatchToProps)(Temp);
