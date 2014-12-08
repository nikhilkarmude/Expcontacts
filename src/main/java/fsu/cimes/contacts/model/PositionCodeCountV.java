/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fsu.cimes.contacts.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author hpandav
 */
@Entity
@Table(name = "PositionCodeCount_V", catalog = "ExNetContacts", schema = "dbo")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "PositionCodeCountV.findAll", query = "SELECT p FROM PositionCodeCountV p"),
    @NamedQuery(name = "PositionCodeCountV.findByPositionID", query = "SELECT p FROM PositionCodeCountV p WHERE p.positionID = :positionID"),
    @NamedQuery(name = "PositionCodeCountV.findByPositionCode", query = "SELECT p FROM PositionCodeCountV p WHERE p.positionCode = :positionCode"),
    @NamedQuery(name = "PositionCodeCountV.findByPCount", query = "SELECT p FROM PositionCodeCountV p WHERE p.pCount = :pCount")})
public class PositionCodeCountV implements Serializable {
    private static final long serialVersionUID = 1L;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(precision = 53, scale = 0)
    @Id
    private Double positionID;
    @Column(length = 255)
    private String positionCode;
    private Integer pCount;

    public PositionCodeCountV() {
    }

    public Double getPositionID() {
        return positionID;
    }

    public void setPositionID(Double positionID) {
        this.positionID = positionID;
    }

    public String getPositionCode() {
        return positionCode;
    }

    public void setPositionCode(String positionCode) {
        this.positionCode = positionCode;
    }

    public Integer getPCount() {
        return pCount;
    }

    public void setPCount(Integer pCount) {
        this.pCount = pCount;
    }
    
}
