package de.cloneworks.findmymonster.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@Node(jcrType="findmymonster:generalmonsterinformationdocument")
public class GeneralMonsterInformationDocument extends BaseDocument {

    public String getName() {
        return getProperty("findmymonster:name");
    }

    public HippoHtml getDescription() {
        return getHippoHtml("findmymonster:description");
    }

}
