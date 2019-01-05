import React, { Component } from 'react';
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/bower_components/Ionicons/css/ionicons.css'

class NotFound extends Component {
  render() {
    return (
        <div>
            <section className="content-header">
                <h1>
                    404 Error Page
                </h1>
            </section>

            <section className="content">
                <div className="error-page">
                    <h2 className="headline text-yellow"> 404</h2>

                    <div className="error-content">
                        <h3><i className="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>
                        <p>
                            We could not find the page you were looking for.
                            Meanwhile, you may <a href="/">return to dashboard</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default NotFound;