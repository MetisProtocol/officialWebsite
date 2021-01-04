import React from 'react';
import { Footer } from '../footer';

export const Content = (props: any) => <div className="metis_fe--layout-content">
    <section className="metis_fe--layout-content-container">
        {props.children}
    </section>

    <Footer>
    © 2020 by MetisDAO
    </Footer>
</div>
